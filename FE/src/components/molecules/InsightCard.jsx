import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

export default function InsightCard({ children }) {
  const formik = useFormik({
    initialValues: {
      nominal: "",
      tipe_history: 1, // Menyesuaikan dengan nilai default
    },
    validationSchema: yup.object({
      nominal: yup.number().required(),
      tipe_history: yup.number().required(),
    }),
    onSubmit: async (values) => {
      console.log(values);
        try {
          // Lakukan Axios POST ke URL yang ditentukan
          const response = await axios.post(
            "http://127.0.0.1:8000/api/history/store",
            values
          );

          // Lakukan penanganan respons atau operasi lainnya jika diperlukan
          console.log(response.data); // Misalnya, mencetak respons ke konsol

          // Reset nilai form setelah berhasil dikirim
          formik.resetForm();

          // Tampilkan pesan sukses kepada pengguna
          alert("Data berhasil disimpan!");
        } catch (error) {
          // Tangani kesalahan jika terjadi
          console.error("Error saat mengirim data:", error);

          // Tampilkan pesan kesalahan kepada pengguna
          alert("Terjadi kesalahan saat mengirim data. Silakan coba lagi.");
        }
    },
  });

  const handleChange = (e) => {
    formik.setFieldValue(e.target.name, e.target.value);
  };

  return (
    <Card className="w-full max-w-sm p-6">
      <CardHeader>
        <CardTitle className="text-3xl">{children}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {/* NOMINAL */}
        <div className="grid gap-2">
          <Label htmlFor="nominal">Nominal</Label>
          <Input
            name="nominal"
            type="number"
            placeholder="1kg"
            required
            id="nominal"
            onChange={handleChange}
            className={
              formik.touched.nominal &&
              formik.errors.nominal &&
              "box-border border-2 border-red-400"
            }
          />
          <RadioGroup>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                name="tipe_history"
                value={1}
                id="option-one"
                checked={formik.values.tipe_history === 1}
                onChange={handleChange}
              />
              <Label htmlFor="option-one">Tambah</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                name="tipe_history"
                value={0}
                id="option-two"
                checked={formik.values.tipe_history === 0}
                onChange={handleChange}
              />
              <Label htmlFor="option-two">Kurang</Label>
            </div>
          </RadioGroup>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          type="submit"
          onClick={formik.handleSubmit}
          className="w-full bg-green-600"
        >
          SUBMIT
        </Button>
      </CardFooter>
    </Card>
  );
}
