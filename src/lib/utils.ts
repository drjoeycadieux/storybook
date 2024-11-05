import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * A drop-in replacement for `clsx` or `twMerge` that uses `clsx` for class
 * name concatenation and `twMerge` for tailwind class name merging.
 *
 * @param inputs - The class names to concatenate/merge.
 * @returns The merged class name string.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
