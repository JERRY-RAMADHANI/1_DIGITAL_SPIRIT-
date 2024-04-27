import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

export default function LaporanCard() {
	const formik = useFormik({
		initialValues: {
			title: "",
			message: ""
		},
		validationSchema: yup.object({
			title: yup.string().max(50).required(),
			message: yup.string().max(255).required()
		}),
		onSubmit: (values) => {
			handlePost(values);
			formik.resetForm();
		}
	});

	const handlePost = async (values) => {
		const res = await axios.post("http://127.0.0.1:8000/api/message/sendMessage", {
			sender_id: 1,
			title: values.title,
			message: values.message
		});
		console.log(res.data);
		return res.data;
	};

	const handleChange = (e) => {
		formik.setFieldValue(e.target.name, e.target.value);
	};

	return (
		<Card className="w-full max-w-sm p-6 border-none">
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
						className={formik.touched.title && formik.errors.title && "box-border border-2 border-red-400"}
					/>
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
						className={formik.touched.message && formik.errors.message && "box-border border-2 border-red-400"}
					/>
				</div>
			</CardContent>
			<CardFooter>
				<Button type="submit" onClick={formik.handleSubmit} className="w-full bg-green-600 tracking-wider">
					LAPOR
				</Button>
			</CardFooter>
		</Card>
	);
}
