"use client";

import { NextPage } from "next";
import { ChangeEvent, FormEvent, useState } from "react";

const Page: NextPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    address: "",
    phone: "",
    experience: "",
    hobbies: "",
    profilePhoto: null,
  });

  const [errorMessage, seterrorMessage] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    address: "",
    phone: "",
    experience: "",
    hobbies: "",
    profilePhoto: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, files } = target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    if (formData.name === "") {
      seterrorMessage({ ...errorMessage, name: "名前を入力してください" });
    }

    console.log(e.target);
    // if(e.target)
    e.preventDefault();
    // ここでフォームの送信処理を行う
    console.log(formData);
  };

  return (
    <section className="max-w-3xl mx-auto py-20">
      <form onSubmit={handleSubmit} className="flex flex-col gap-10">
        <div className="form-wrapper">
          <label htmlFor="name">名前:</label>
          <input
            type="text"
            id="name"
            name="name"
            maxLength={20}
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        {errorMessage.name ? <span>{errorMessage.name}</span> : ""}
        <div className="form-wrapper">
          <label htmlFor="email">メールアドレス:</label>
          <input
            type="email"
            id="email"
            name="email"
            maxLength={50}
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-wrapper">
          <label htmlFor="password">パスワード:</label>
          <input
            type="password"
            id="password"
            name="password"
            minLength={8}
            pattern="(?=.*\d)(?=.*[a-zA-Z])(?=.*[@#$%^&+=]).*"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-wrapper">
          <label htmlFor="age">年齢:</label>
          <input
            type="number"
            id="age"
            name="age"
            min="18"
            max="120"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div className="form-wrapper">
          <label htmlFor="gender">性別:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">選択してください</option>
            <option value="male">男性</option>
            <option value="female">女性</option>
            <option value="other">その他</option>
          </select>
        </div>
        <div className="form-wrapper">
          <label htmlFor="address">住所:</label>
          <input
            type="text"
            id="address"
            name="address"
            maxLength={100}
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-wrapper">
          <label htmlFor="phone">電話番号:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{10,11}"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-wrapper">
          <label htmlFor="experience">経歴:</label>
          <textarea
            id="experience"
            name="experience"
            maxLength={500}
            value={formData.experience}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-wrapper">
          <label htmlFor="hobbies">趣味:</label>
          <select
            id="hobbies"
            name="hobbies"
            value={formData.hobbies}
            onChange={handleChange}
          >
            <option value="">選択してください</option>
            <option value="movies">映画鑑賞</option>
            <option value="reading">読書</option>
            <option value="sports">スポーツ</option>
          </select>
        </div>
        <div className="form-wrapper">
          <label htmlFor="profilePhoto">プロフィール写真:</label>
          <input
            type="file"
            id="profilePhoto"
            name="profilePhoto"
            accept="image/png, image/jpeg"
            onChange={handleChange}
          />
        </div>
        <button type="submit">送信</button>
      </form>
    </section>
  );
};

export default Page;
