import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import * as yup from "yup";

export default function InsightCard({ children }) {
	const formik = useFormik({
		initialValues: {
			nominal: ""
		},
		validationSchema: yup.object({
			nominal: yup.number().required()
		}),
		onSubmit: (values) => {}
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
						placeholder=". . . kg"
						required
						id="nominal"
						onChange={handleChange}
						className={formik.touched.nominal && formik.errors.nominal && "box-border border-2 border-red-400"}
					/>
				</div>
			</CardContent>

			<CardFooter>
				<Button type="submit" onClick={formik.handleSubmit} className="w-full bg-green-600">
					SUBMIT
				</Button>
			</CardFooter>
		</Card>
	);
}
