const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim() ?? "";

export const appBasePath = configuredBasePath
  ? `/${configuredBasePath.replace(/^\/+|\/+$/g, "")}`
  : "";

export function withBasePath(path: string) {
  const absolutePath = path.startsWith("/") ? path : `/${path}`;
  return `${appBasePath}${absolutePath}`;
}