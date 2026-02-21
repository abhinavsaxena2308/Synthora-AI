const IMGBB_UPLOAD_URL = "https://api.imgbb.com/1/upload";

export interface ImgBBResponse {
  data: {
    url: string;
    image?: { url: string };
  };
  success: boolean;
  status: number;
}

export async function uploadImageToImgBB(file: File, apiKey: string): Promise<string> {
  const form = new FormData();
  form.set("key", apiKey);
  form.append("image", file);

  const res = await fetch(IMGBB_UPLOAD_URL, {
    method: "POST",
    body: form,
  });

  const json = (await res.json()) as ImgBBResponse & { error?: { message?: string } };

  if (!res.ok || !json.success) {
    const msg = json.error?.message
      ?? (typeof json.status === "number" ? String(json.status) : json.status)
      ?? res.statusText;
    throw new Error(msg);
  }

  return json.data?.url ?? json.data?.image?.url ?? "";
}