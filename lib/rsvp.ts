export type Wish = {
      id: string;
      name: string;
      message: string;
      attendance: "hadir" | "tidak_hadir" | "belum_pasti";
      createdAt: number;
};

// ── API route wrappers (called from client components) ────────────────────────

export async function fetchWishes(): Promise<Wish[]> {
      try {
            const res = await fetch("/api/rsvp", { cache: "no-store" });
            if (!res.ok) return [];
            return await res.json();
      } catch {
            return [];
      }
}

export async function submitWish(
      wish: Omit<Wish, "id" | "createdAt">
): Promise<boolean> {
      try {
            const res = await fetch("/api/rsvp", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(wish),
            });
            return res.ok;
      } catch {
            return false;
      }
}
