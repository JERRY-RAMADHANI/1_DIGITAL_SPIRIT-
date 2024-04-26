import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import * as yup from "yup";
import { fetchAuth } from "@/lib/fetchUtils";

export default function SignUpCard() {
	const formik = useFormik({
		initialValues: {
			name: "",
			number: "",
			email: "",
			password: ""
		},
		validationSchema: yup.object({
			name: yup.string().min(2).max(50).required(),
			number: yup
				.string()
				.min(10)
				.max(14)
				.required()
				.matches(/^[0-9]+$/),
			email: yup.string().email().min(2).max(50).required(),
			password: yup.string().min(8).required()
		}),
		onSubmit: (values) => {
			fetchAuth("REGISTER", values)
				.then((data) => {
					console.log(data);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	});

	const handleChange = (e) => {
		formik.setFieldValue(e.target.name, e.target.value);
	};

	return (
		<Card className="w-full max-w-sm border-none">
			<CardHeader>
				<CardTitle className="text-2xl">Register</CardTitle>
				<CardDescription>Enter your data below to make your new account.</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-4">
				{/* NAME */}
				<div className="grid gap-2">
					<Label htmlFor="name">Name</Label>
					<Input
						name="name"
						type="text"
						placeholder="John Doe"
						required
						id="name"
						onChange={handleChange}
						className={formik.touched.name && formik.errors.name && "box-border border-2 border-red-400"}
					/>
				</div>
				{/* PHONE */}
				<div className="grid gap-2">
					<Label htmlFor="tel">Phone</Label>
					<Input
						name="number"
						type="tel"
						placeholder="08123456789"
						required
						id="tel"
						onChange={handleChange}
						className={formik.touched.number && formik.errors.number && "box-border border-2 border-red-400"}
					/>
				</div>
				{/* EMAIL */}
				<div className="grid gap-2">
					<Label htmlFor="email">Email</Label>
					<Input
						name="email"
						type="email"
						placeholder="email@example.com"
						required
						id="email"
						onChange={handleChange}
						className={formik.touched.email && formik.errors.email && "box-border border-2 border-red-400"}
					/>
				</div>
				{/* PASSWORD */}
				<div className="grid gap-2">
					<Label htmlFor="password">Password</Label>
					<Input
						name="password"
						type="password"
						placeholder="********"
						required
						id="password"
						onChange={handleChange}
						className={formik.touched.password && formik.errors.password && "box-border border-2 border-red-400"}
					/>
				</div>
			</CardContent>
			<CardFooter>
				<Button type="submit" onClick={formik.handleSubmit} className="w-full">
					Sign Up
				</Button>
			</CardFooter>
		</Card>
	);
}
