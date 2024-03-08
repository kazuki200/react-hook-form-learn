"use client";
import { SubmitHandler, useForm } from "react-hook-form";

const page = () => {
  type Inputs = {
    nameSei: string;
    nameMei: string;
    postalCode: string;
    address: string;
    phone: string;
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("nameSei"));

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
          <input className="w-60" type="text" {...register("nameMei")} />
        </div>
        <div className="form-wrapper">
          <label htmlFor="postalCode">郵便番号</label>
          <input type="text" id="postalCode" {...register("postalCode")} />
        </div>
        <div className="form-wrapper">
          <label htmlFor="address">住所</label>
          <input type="text" id="address" {...register("address")} />
        </div>
        <div className="form-wrapper">
          <label htmlFor="phone">電話番号</label>
          <input type="phone" id="phone" {...register("phone")} />
        </div>
        <input type="submit" value="送信" />
      </form>
    </section>
  );
};

export default page;
