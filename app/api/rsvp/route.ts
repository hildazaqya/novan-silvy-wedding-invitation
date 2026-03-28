import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

function serverSupabase() {
      return createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.SUPABASE_SERVICE_ROLE_KEY!
      );
}

export async function GET() {
      const supabase = serverSupabase();
      const { data, error } = await supabase
            .from("rsvp_wishes_novan_silvy")
            .select("*")
            .order("created_at", { ascending: false });

      if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
      }

      const wishes = (data ?? []).map((row) => ({
            id: String(row.id),
            name: row.nama,
            message: row.ucapan,
            attendance: row.konfirmasi_kehadiran,
            createdAt: new Date(row.created_at).getTime(),
      }));

      return NextResponse.json(wishes);
}

export async function POST(request: NextRequest) {
      const { name, message, attendance } = await request.json();

      const supabase = serverSupabase();
      const { error } = await supabase.from("rsvp_wishes_novan_silvy").insert({
            nama: name,
            ucapan: message,
            konfirmasi_kehadiran: attendance,
      });

      if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
      }

      // Forward to Google Apps Script from server — no CORS issues
      const gasUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
      if (gasUrl) {
            fetch(gasUrl, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ name, message, status: attendance }),
            }).catch(() => { });
      }

      return NextResponse.json({ success: true });
}
