// utils/classNames.ts
export default function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
