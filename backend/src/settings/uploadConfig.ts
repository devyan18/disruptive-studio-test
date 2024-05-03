import multer from "multer";
import path from "path";
import type { Express, Request } from "express";
import fs from "node:fs";

// Configuración del almacenamiento
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let uploadPath = path.join(__dirname, "..", "uploads");

    // Determinar subcarpeta basada en el tipo MIME del archivo
    if (file.mimetype.startsWith("image/")) {
      uploadPath = path.join(uploadPath, "images"); // Guardar imágenes en la carpeta 'images'
    } else {
      uploadPath = path.join(uploadPath, "files"); // Guardar otros archivos en la carpeta 'files'
    }

    // Crear directorio si no existe
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }

    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
  }
});
// Filtro para tipos de archivo
// Filtro para tipos de archivo
const fileFilter = (_req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  if (file.mimetype === "application/pdf" || file.mimetype.startsWith("image/")) {
    cb(null, true); // No hay error, archivo aceptado
  } else {
    cb(null, false); // Pasar objeto Error y false
  }
};

export const upload = multer({ storage, fileFilter });
