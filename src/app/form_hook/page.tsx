"use client";
import { SubmitHandler, useForm } from "react-hook-form";

const page = () => {
  enum GenderEnum {
    female = "female",
    male = "male",
    other = "other",
  }

  type Inputs = {
    nameSei: string;
    nameMei: string;
    gender: GenderEnum;
    age: number;
  };

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      nameSei: "苗字",
      nameMei: "名前",
      age: 18,
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <section className="max-w-3xl mx-auto py-20">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10">
        <div className="form-wrapper">
          <label htmlFor="nameSei">姓</label>
          <input
            className="w-60"
            type="text"
            {...register("nameSei", { required: true })}
          />
        </div>
        {errors.nameSei && <span>姓が未入力です</span>}
        <div className="form-wrapper">
          <label htmlFor="nameMei">名</label>
          <input
            className="w-60"
            type="text"
            {...register("nameMei", { required: true })}
          />
        </div>
        {errors.nameMei && <span>名が未入力です</span>}
        <div className="form-wrapper">
          <select {...register("gender")}>
            <option value="female">女性</option>
            <option value="male">男性</option>
            <option value="other">その他</option>
          </select>
        </div>
        <div className="form-wrapper">
          <input
            type="number"
            {...register("age", {
              required: "年齢を入力してください",
              min: { value: 18, message: "18歳未満は入力できません" },
              max: 99,
            })}
          />
        </div>
        {errors.age && errors.age.message}

        <input type="submit" value="送信" />
      </form>
    </section>
  );
};

export default page;
