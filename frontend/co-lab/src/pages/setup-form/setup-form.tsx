
import { Formik, Field, FieldProps } from "formik";
import { Footer } from "../../components/footer/footer";

import './setup-form.scss'

interface FormProps {
  username: string,

}
export const SetupForm = () => {
  const initialValues: FormProps = { username: "" }

  return (
    <>
      <section id="card">
        <section id="title">Create Session</section>
        <Formik initialValues={initialValues} onSubmit={() => { }}>
          <form onSubmit={(e) => { e.preventDefault() }}>
            <section id="user-sect">
              <label className="section-heading" htmlFor="username">
                Username:
              </label>

              <section className="row">
                <input type="text" name="username" id="username" />
                <select title="avatar" name="avatar" id="avatar">
                  <option value="" hidden>Avatar</option>
                  <option value="coffee">☕</option>
                  <option value="clown">🤡</option>
                  <option value="writer">✍🏻</option>
                  <option value="owl">🦉</option>
                  <option value="observer">👀</option>
                  <option value="gamer">🎮</option>
                </select>
              </section>
            </section>
            <section id="role-sect">
              <p className="section-heading">Role</p>
              <section className="radio-group">
                <label htmlFor="lead"> <input title="lead" type="radio" value="Lead" name="lead" /> Lead
                </label>
                <label htmlFor="dev"> <input title="dev" type="radio" value="Dev" name="dev" /> Developer
                </label>
                <label htmlFor="watcher">
                  <input title="watcher" type="radio" value="Watcher" name="watcher" /> Watcher
                </label>
              </section>
            </section>
            <section className="bottom">
              <button type="reset" className="secondary" onClick={() => window.location.href = '/'}>
                Cancel
              </button>
              <button type="submit" className="primary" onClick={() => window.location.href = '/session-info'}>
                Create
              </button>
            </section>
          </form>
        </Formik>
      </section>
      <Footer />
    </>
  );
};
