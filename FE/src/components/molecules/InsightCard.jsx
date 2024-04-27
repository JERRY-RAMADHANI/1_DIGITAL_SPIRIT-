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
      tipe_history: 1,
    },
    validationSchema: yup.object({
      nominal: yup.number().required().min(0),
      tipe_history: yup.number().required(),
    }),
    onSubmit: async (values, { resetForm }) => {
      const obj = {
        nominal: parseFloat(values.nominal),
        tipe_histori: values.tipe_history,
        user_id: 1,
        tipe_sampah: children,
      };

      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/history/store",
          obj
        );
        console.log(response.data);
        resetForm();
        alert("Data berhasil disimpan!");
      } catch (error) {
        console.error("Error saat mengirim data:", error);
        if (error.response) {
          console.error("Error:", error.response.data);
          alert("Terjadi kesalahan saat mengirim data: " + error.response.data);
        } else {
          alert("Terjadi kesalahan saat mengirim data. Silakan coba lagi.");
        }
      }
    },
  });

  const handleChange = (e) => {
    formik.setFieldValue(e.target.name, e.target.value);
  };

  return (
    <Card className="w-full max-w-sm p-6">
      <form onSubmit={formik.handleSubmit}>
        <CardHeader>
          <CardTitle className="text-3xl">{children}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
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
            {formik.touched.nominal && formik.errors.nominal && (
              <div className="text-red-600">{formik.errors.nominal}</div>
            )}
          </div>
          <RadioGroup
            value={formik.values.tipe_history}
            onClick={handleChange}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem name="tipe_history" value={1} id="option-one" />
              <Label htmlFor="option-one">Tambah</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem name="tipe_history" value={0} id="option-two" />
              <Label htmlFor="option-two">Kurang</Label>
            </div>
          </RadioGroup>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full bg-green-600">
            SUBMIT
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
