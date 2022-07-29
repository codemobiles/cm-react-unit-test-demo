import React from "react";

type Props = {
  label: string;
};

export default function Button({ label }: Props) {
  return <div data-testid="button">{label}</div>;
}
