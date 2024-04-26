import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import * as yup from "yup";
import { fetchAuth } from "@/lib/fetchUtils";

export default function LaporanCard() {
	const formik = useFormik({
		initialValues: {
			judul: "",
			deskripsi: ""
		},
		validationSchema: yup.object({
			judul: yup.string().max(50).required(),
			deskripsi: yup.string().max(255).required()
		}),
		onSubmit: (values) => {
			// fetchAuth("LOGIN", values)
			// 	.then((data) => {
			// 		console.log("__SUCCESS__", data);
			// 	})
			// 	.catch((error) => {
			// 		console.log("__ERROR__", error);
			// 	});
			console.log("SUBMITED");
		}
	});

	const handleChange = (e) => {
		formik.setFieldValue(e.target.name, e.target.value);
	};

	return (
		<Card className="w-full max-w-sm p-6 border-none">
			<CardContent className="grid gap-4">
				{/* JUDUL */}
				<div className="grid gap-2">
					<Label htmlFor="judul">Judul</Label>
					<Input
						name="judul"
						type="text"
						placeholder=". . ."
						required
						id="judul"
						onChange={handleChange}
						className={formik.touched.judul && formik.errors.judul && "box-border border-2 border-red-400"}
					/>
				</div>
				{/* DESKRIPSI */}
				<div className="grid gap-2">
					<Label htmlFor="deskripsi">Deskripsi</Label>
					<Input
						name="deskripsi"
						type="text"
						placeholder=". . ."
						required
						id="deskripsi"
						onChange={handleChange}
						className={formik.touched.deskripsi && formik.errors.deskripsi && "box-border border-2 border-red-400"}
					/>
				</div>
			</CardContent>
			<CardFooter>
				<Button type="submit" onClick={formik.handleSubmit} className="w-full bg-lime-500">
					LAPOR
				</Button>
			</CardFooter>
		</Card>
	);
}
