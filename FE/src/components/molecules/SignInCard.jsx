import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useFormik } from "formik";
import * as yup from "yup";
import { fetchAuth } from "@/lib/fetchUtils";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useEffect } from "react";

export default function SignInCard() {
	const [auth, setAuth] = useContext(AuthContext);

	useEffect(() => {
		console.log(auth);
	}, [auth]);

	const formik = useFormik({
		initialValues: {
			email: "",
			password: ""
		},
		validationSchema: yup.object({
			email: yup.string().email().min(2).max(50).required(),
			password: yup.string().min(8).required()
		}),
		onSubmit: (values) => {
			fetchAuth("LOGIN", values)
				.then((data) => {
					console.log("__SUCCESS__", data);
					setAuth({ authenticated: true });
				})
				.catch((error) => {
					console.log("__ERROR__", error);
				});
		}
	});

	const handleChange = (e) => {
		formik.setFieldValue(e.target.name, e.target.value);
	};

	return (
		<Card className="w-full max-w-sm border-none">
			<CardHeader>
				<CardTitle className="text-2xl">Login</CardTitle>
				<CardDescription>Enter your email below to login to your account.</CardDescription>
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
				<Button type="submit" onClick={formik.handleSubmit} className="w-full">
					Sign in
				</Button>
			</CardFooter>
		</Card>
	);
}
