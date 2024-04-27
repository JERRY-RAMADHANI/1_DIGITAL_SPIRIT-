import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

const urlPost = "http://127.0.0.1:8000/api/message/sendMessage";

export default function ReportCard() {
  const initialValues = {
    title: "",
    message: "",
  };

  const validationSchema = yup.object({
    title: yup.string().max(50).required("Judul laporan tidak boleh kosong."),
    message: yup
      .string()
      .max(255)
      .required("Deskripsi laporan tidak boleh kosong."),
  });

  const onSubmit = async (values) => {
    try {
      const obj = {
        sender_id: 1,
        message: values.message,
        title: values.title,
      }
      console.log(obj);
      const res = await axios.post(urlPost, obj);
      // resetForm();
      console.log(res.data);
      alert("Pesan laporan berhasil dikirim!");
    } catch (error) {
      console.error("Error saat mengirim pesan laporan:", error);
      alert(
        "Terjadi kesalahan saat mengirim pesan laporan. Silakan coba lagi."
      );
    }
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const handleChange = (e) => {
    formik.setFieldValue(e.target.name, e.target.value);
  };

  return (
    <Card className="w-full max-w-sm p-6 border-none">
      <form onSubmit={formik.handleSubmit}>
        <CardHeader>
          <CardTitle className="text-3xl">Laporan Baru</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          {/* JUDUL */}
          <div className="grid gap-2">
            <Label htmlFor="title">Judul</Label>
            <Input
              name="title"
              type="text"
              placeholder=". . ."
              required
              id="title"
              onChange={handleChange}
              className={
                formik.touched.title &&
                formik.errors.title &&
                "box-border border-2 border-red-400"
              }
            />
            {formik.touched.title && formik.errors.title && (
              <div className="text-red-600">{formik.errors.title}</div>
            )}
          </div>

          {/* DESKRIPSI */}
          <div className="grid gap-2">
            <Label htmlFor="message">Deskripsi</Label>
            <Input
              name="message"
              type="text"
              placeholder=". . ."
              required
              id="message"
              onChange={handleChange}
              className={
                formik.touched.message &&
                formik.errors.message &&
                "box-border border-2 border-red-400"
              }
            />
            {formik.touched.message && formik.errors.message && (
              <div className="text-red-600">{formik.errors.message}</div>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full bg-green-600 tracking-wider">
            LAPOR
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
