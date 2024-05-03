import React from "react";
import styles from "./Layout.module.css";

type Props = {
  children?: React.ReactNode;
};

export default function Layout (props: Props) {
  return (
    <div className={styles.Layout}>
      {props.children}
    </div>
  );
}
