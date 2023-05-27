import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data =>
    
    console.log(data);
    return (
        <div className="container text-center">
            <div className="row justify-content-md-center">

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="col">
                        <label>FirstName</label>
                        <input {...register("firstName",{ required: true, maxLength: 20 , pattern: /^[A-Za-z]+$/i })} />

                    </div>

                    <div className="col">
                    <label>Header</label>
                        <input {...register("header",{ required: true, maxLength: 20 })} />
                    </div>

                    <div className="col">
                    <label>Social</label>
                        <input {...register("social",{ required: true, maxLength: 20 })} />
                    </div>

                    <div className="col">
                    <label>Skill</label>
                        <select {...register("skills",{ required: true, maxLength: 20 })}>
                            <option value="Java">Java</option>
                            <option value="Python">Python</option>
                            <option value="JavaScript">JavaScript</option>
                        </select>
                    </div>

                    <div className="col">
                    <label>Experience</label>
                        <input {...register("experience",{ required: true, maxLength: 20 })} />
                    </div>

                    <div className="col">
                    <label>projects</label>
                        <input {...register("projects",{ required: true, maxLength: 20 })} />
                    </div>

                    <div className="col">
                    <label>language</label>
                        <input {...register("language",{ required: true, maxLength: 20 })} />
                    </div>

                    <div className="col">
                    <label>course</label>
                        <input {...register("course",{ required: true, maxLength: 20 })} />
                    </div>
 
                    <div className="col">
                    <label>decleration</label>
                        <input {...register("decleration",{ required: true, maxLength: 20 })} />
                    </div>


                    <input type="submit" />
                </form>


            </div>


        </div>
    )
}

export default Form;