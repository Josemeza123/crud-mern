import { Form, Formik } from "formik";
import { createTaskRequest } from "../api/tasks.api";

const TaskForm = () => {
 
  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          descripcion: "",
        }}
        onSubmit={async (values, actions) => {
          console.log(values);
          try {
            const response = await createTaskRequest(values);
            console.log(response);
            actions.resetForm();
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label>title</label>
            <input
              type="text"
              name="title"
              placeholder="write a title"
              onChange={handleChange}
              value={values.title}
            />
            <label htmlFor="">description</label>
            <textarea
              name="descripcion"
              rows="3"
              placeholder="Write a description"
              onChange={handleChange}
              value={values.descripcion}
            ></textarea>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving ..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TaskForm;
