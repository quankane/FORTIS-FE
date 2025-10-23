import pc2 from "@/assets/icons/anhthietke1.webp";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LoginForm() {
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        AOS.init({ duration: 800, once: false, offset: 100 });
    }, []);
    useEffect(() => {
        AOS.refresh();
    }, [isLogin]);

    useEffect(() => {
        const loggedIn = localStorage.getItem("isLoggedIn") === "true";
        setIsLoggedIn(loggedIn);
    }, []);

    useEffect(() => {
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
        });
        setErrors({});
        setShowPassword(false);
        setShowConfirmPassword(false);
    }, [isLogin]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const newErrors = {};
        if (!isLogin) {
            if (!formData.firstName.trim())
                newErrors.firstName = "Vui lòng nhập họ";
            if (!formData.lastName.trim())
                newErrors.lastName = "Vui lòng nhập tên";
            if (!formData.email.trim()) {
                newErrors.email = "Vui lòng nhập email";
            } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
                newErrors.email = "Email không hợp lệ";
            }
        }
        if (!formData.username.trim())
            newErrors.username = "Vui lòng nhập tên đăng nhập";
        if (!formData.password.trim()) {
            newErrors.password = "Vui lòng nhập mật khẩu";
        } else if (formData.password.length < 6) {
            newErrors.password = "Mật khẩu phải ít nhất 6 ký tự";
        }
        if (!isLogin) {
            if (!formData.confirmPassword.trim()) {
                newErrors.confirmPassword = "Vui lòng nhập lại mật khẩu";
            } else if (formData.password !== formData.confirmPassword) {
                newErrors.confirmPassword = "Mật khẩu nhập lại không khớp";
            }
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

        if (isLogin) {
            const existingUser = storedUsers.find(
                (u) =>
                    u.username === formData.username &&
                    u.password === formData.password
            );
            if (!existingUser) {
                setErrors({ username: "Sai tên đăng nhập hoặc mật khẩu!" });
                return;
            }
            localStorage.setItem("isLoggedIn", "true");
            setIsLoggedIn(true);
        } else {
            const userExists = storedUsers.some(
                (u) => u.username === formData.username
            );
            if (userExists) {
                setErrors({ username: "Tên đăng nhập đã tồn tại!" });
                return;
            }
            const newUser = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                username: formData.username,
                password: formData.password,
            };
            storedUsers.push(newUser);
            localStorage.setItem("users", JSON.stringify(storedUsers));
            alert("Đăng ký thành công, mời bạn đăng nhập!");
            setIsLogin(true);
        }
    };

    const logoutHandler = () => {
        localStorage.setItem("isLoggedIn", "false");
        setIsLoggedIn(false);
    };

    if (isLoggedIn) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div
                    className="bg-white shadow-lg rounded-lg p-8 text-center"
                    data-aos="zoom-in"
                >
                    <h2 className="text-2xl font-bold text-orange-500 mb-4">
                        Xin chào!
                    </h2>
                    <p className="mb-4">Bạn đã đăng nhập thành công 🎉</p>
                    <button
                        onClick={logoutHandler}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition duration-300"
                    >
                        Đăng xuất
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row overflow-hidden w-full max-w-md md:max-w-4xl">
                {/* Cột bên trái */}
                <div
                    key={isLogin ? "left-login" : "left-register"}
                    className={`hidden md:flex w-full md:w-1/2 bg-gray-50 flex-col p-6 md:p-8 gap-4 
                    ${
                        isLogin
                            ? "justify-center items-center"
                            : "justify-start items-center"
                    }`}
                    data-aos="fade-right"
                >
                    <h2 className="text-2xl font-bold text-orange-500 mb-4">
                        {isLogin ? "Đăng ký" : "Đăng nhập"}
                    </h2>
                    <p className="text-gray-600 text-base mb-6 text-center">
                        {isLogin
                            ? "Chào mừng bạn đến với Haüs. Nếu bạn chưa có tài khoản, có thể đăng ký tại ô dưới đây."
                            : "Chào mừng bạn đến với Haüs. Nếu bạn đã có tài khoản, có thể đăng nhập tại ô dưới đây."}
                    </p>
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition duration-300 cursor-pointer"
                    >
                        {isLogin ? "Tạo tài khoản" : "Tôi có tài khoản"}
                    </button>
                    <img
                        src={pc2}
                        alt="Decor"
                        className="mt-6 rounded-lg shadow-md w-32 h-32 md:w-full md:h-60 object-contain"
                        data-aos="flip-left"
                    />
                </div>

                {/* Form bên phải */}
                <div
                    key={isLogin ? "right-login" : "right-register"}
                    className="w-full md:w-1/2 p-6 md:p-8"
                    data-aos="fade-left"
                >
                    <h2 className="text-xl md:text-2xl font-bold text-orange-500 mb-4 md:mb-6 text-center">
                        {isLogin ? "Đăng nhập" : "Đăng ký"}
                    </h2>

                    <form
                        className="space-y-3 md:space-y-4"
                        onSubmit={handleSubmit}
                    >
                        {!isLogin && (
                            <div className="space-y-3 md:space-y-4">
                                <div>
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="Họ"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full p-2 border border-gray-400 rounded-xl focus:outline-none focus:border-orange-500 shadow-sm focus:shadow-md"
                                    />
                                    {errors.firstName && (
                                        <p className="text-red-500 text-sm">
                                            {errors.firstName}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Tên"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full p-2 border border-gray-400 rounded-xl focus:outline-none focus:border-orange-500 shadow-sm focus:shadow-md"
                                    />
                                    {errors.lastName && (
                                        <p className="text-red-500 text-sm">
                                            {errors.lastName}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full p-2 border border-gray-400 rounded-xl focus:outline-none focus:border-orange-500 shadow-sm focus:shadow-md"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm">
                                            {errors.email}
                                        </p>
                                    )}
                                </div>
                            </div>
                        )}

                        <div>
                            <input
                                type="text"
                                name="username"
                                placeholder="Tên đăng nhập"
                                value={formData.username}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-400 rounded-xl focus:outline-none focus:border-orange-500 shadow-sm focus:shadow-md"
                            />
                            {errors.username && (
                                <p className="text-red-500 text-sm">
                                    {errors.username}
                                </p>
                            )}
                        </div>

                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Mật khẩu"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-400 rounded-xl focus:outline-none focus:border-orange-500 shadow-sm focus:shadow-md"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-2 text-gray-500 text-lg"
                            >
                                {showPassword ? (
                                    <i className="fa-solid fa-eye text-black"></i>
                                ) : (
                                    <i className="fa-solid fa-eye-slash text-black"></i>
                                )}
                            </button>
                            {errors.password && (
                                <p className="text-red-500 text-sm">
                                    {errors.password}
                                </p>
                            )}
                        </div>

                        {!isLogin && (
                            <div className="relative">
                                <input
                                    type={
                                        showConfirmPassword
                                            ? "text"
                                            : "password"
                                    }
                                    name="confirmPassword"
                                    placeholder="Xác nhận lại mật khẩu"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-400 rounded-xl focus:outline-none focus:border-orange-500 shadow-sm focus:shadow-md"
                                />
                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowConfirmPassword(
                                            !showConfirmPassword
                                        )
                                    }
                                    className="absolute right-3 top-2 text-gray-500 text-lg"
                                >
                                    {showConfirmPassword ? (
                                        <i className="fa-solid fa-eye text-black"></i>
                                    ) : (
                                        <i className="fa-solid fa-eye-slash text-black"></i>
                                    )}
                                </button>
                                {errors.confirmPassword && (
                                    <p className="text-red-500 text-sm">
                                        {errors.confirmPassword}
                                    </p>
                                )}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md transition duration-300 cursor-pointer"
                            data-aos="zoom-in"
                        >
                            {isLogin ? "Đăng nhập" : "Đăng ký"}
                        </button>

                        <div
                            className="text-center text-sm md:text-base"
                            data-aos="fade-up"
                        >
                            {isLogin ? (
                                <p>
                                    Bạn chưa có tài khoản?{" "}
                                    <span
                                        onClick={() => setIsLogin(false)}
                                        className="text-orange-500 cursor-pointer"
                                    >
                                        Đăng ký
                                    </span>
                                </p>
                            ) : (
                                <p>
                                    Bạn đã có tài khoản?{" "}
                                    <span
                                        onClick={() => setIsLogin(true)}
                                        className="text-orange-500 cursor-pointer"
                                    >
                                        Đăng nhập
                                    </span>
                                </p>
                            )}
                        </div>

                        {isLogin && (
                            <p className="text-center text-sm text-gray-500 cursor-pointer">
                                Quên mật khẩu?
                            </p>
                        )}

                        <div
                            className="flex items-center my-3 md:my-4"
                            data-aos="fade-up"
                        >
                            <hr className="flex-grow border-gray-300" />
                            <span className="mx-2 text-gray-500 text-sm md:text-base">
                                Hoặc
                            </span>
                            <hr className="flex-grow border-gray-300" />
                        </div>

                        <button
                            type="button"
                            className="w-full border border-gray-300 py-2 rounded-md flex justify-center items-center gap-2 cursor-pointer text-sm md:text-base"
                            data-aos="flip-up"
                        >
                            <img
                                src="https://www.svgrepo.com/show/355037/google.svg"
                                alt="Google"
                                className="w-5 h-5"
                            />
                            Đăng nhập bằng Google
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
