import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A utility function to conditionally join class names together.
 * It merges Tailwind CSS classes without style conflicts.
 *
 * @param {...(string|Object|Array)} inputs - A list of class names.
 * @returns {string} The merged class names.
 * @see https://github.com/dcastil/tailwind-merge/v2/getting-started/integrations/react#create-a-helper
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
