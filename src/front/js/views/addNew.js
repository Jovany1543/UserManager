import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../../styles/home.scss";

export const AddNew = () => {
	const history = useHistory();

	const { store, actions } = useContext(Context);

	const [userData, setUserData] = useState({});

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();

	const onSubmit = async data => {
		actions.createUser(data);
		// const isFound = () =>
		// 	store.users.find(user => {
		// 		if (user.email === data.email) {
		// 			return true;
		// 		}

		// 		return false;
		// 	});

		// try {
		// 	// let creation = actions.createUser(data);

		// 	// if (isFound != true) {
		// 	// 	history.push("/");
		// 	// } else {
		// 	// 	actions.setAlert({
		// 	// 		type: "danger",
		// 	// 		msg: creation.message,
		// 	// 		show: true
		// 	// 	});
		// 	// }
		// } catch (e) {
		// 	alert(e.message);
		// }
		// return false;
	};

	return (
		<div className="container-fluid">
			<div className="row d-flex main-content text-center w-50 rounded shadow-lg my-5 mx-auto p-4">
				<div className="col-md-8 col-xs-12 col-sm-12 login-form mx-auto bg-white rounded">
					<div className="container-fluid">
						<div className="row justify-content-center">
							<h1 className="font-weight-light">Create New User</h1>
						</div>
						<div className="row justify-content-center">
							<form onSubmit={handleSubmit(onSubmit)} control="" className="form-group p-2 w-100">
								<div className="row justify-content-between">
									<input
										type="text"
										name="first_name"
										id="first_name"
										className="form__input border-top-0 border-left-0 border-right-0 border-bottom w-100 pt-2"
										placeholder="First Name"
										{...register("first_name", { required: "Please enter your first name" })}
									/>
									{errors.first_name && (
										<span className="text-danger">{errors.first_name.message}</span>
									)}
									<input
										type="text"
										name="last_name"
										id="last_name"
										className="form__input border-top-0 border-left-0 border-right-0 border-bottom w-100 pt-2 mt-2"
										placeholder="Last Name"
										{...register("last_name", { required: "Please enter your last name" })}
									/>
									{errors.last_name && (
										<span className="text-danger"> {errors.last_name.message}</span>
									)}
								</div>
								<div className="row justify-content-center mt-2">
									<input
										type="text"
										name="email"
										id="email"
										className="form__input border-top-0 border-left-0 border-right-0 border-bottom w-100 pt-2"
										placeholder="Email Address"
										{...register("email", {
											required: "E-mail is required",
											pattern: {
												value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
												message: "Enter a valid email address"
											}
										})}
									/>
									{errors.email && <span className="text-danger">{errors.email.message}</span>}
								</div>
								<div className="row justify-content-center mt-2">
									<input
										type="number"
										name="age"
										id="age"
										className="form__input border-top-0 border-left-0 border-right-0 border-bottom w-100 pt-2"
										placeholder="Age"
										{...register("age", {
											required: "Age is required."
										})}
									/>
									{errors.age && <span className="text-danger">{errors.age.message}</span>}
								</div>
								<div className="row justify-content-center mt-2">
									<input
										type="text"
										name="favorite_color"
										id="favorite_color"
										className="form__input border-top-0 border-left-0 border-right-0 border-bottom w-100 pt-2"
										placeholder="Favorite color"
										{...register("favorite_color", {
											required: "Favorite color is required."
										})}
									/>
									{errors.favorite_color && (
										<span className="text-danger">{errors.favorite_color.message}</span>
									)}
								</div>
								<div className="row justify-content-center mt-4">
									<input
										type="submit"
										value="Submit"
										className="btn-primary rounded w-100 border-0 py-2"
									/>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
