import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import * as yup from "yup";
import { fetchAuth } from "@/lib/fetchUtils";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function SignInCard() {
	const [auth, setAuth] = useContext(AuthContext);

	const formik = useFormik({
		initialValues: {
			email: "",
			password: ""
		},
		validationSchema: yup.object({
			email: yup.string().min(2).max(50).required(),
			password: yup.string().min(8).required()
		}),
		onSubmit: (values) => {
			fetch("http://127.0.0.1:8000/api/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email: values.email, password: values.password })
			}).then((data) => {
				if (data.ok) window.location.href = "/home";
			});
		}
	});

	const handleChange = (e) => {
		formik.setFieldValue(e.target.name, e.target.value);
	};

	return (
		<Card className="w-full max-w-sm p-6">
			<CardHeader>
				<CardTitle className="text-3xl">Digital Compost</CardTitle>
				<CardDescription>Masukkan email dan password</CardDescription>
			</CardHeader>
			<CardContent className="grid gap-4">
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
				<Button type="submit" onClick={formik.handleSubmit} className="w-full bg-green-600">
					LOGIN
				</Button>
			</CardFooter>
		</Card>
	);
}
