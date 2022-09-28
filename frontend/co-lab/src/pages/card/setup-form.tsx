import "./card.scss";
export const SetupForm = () => {
  return (
    <section id="card">
      <section id="title">Create Session</section>
      <form
        onSubmit={() => {
          /* To-Do */
        }}
      >
        <section className="user-sect">
          <label className="section-heading" htmlFor="username">
            Username:
          </label>

          <section className="row">
            <input type="text" name="username" id="username" />
            <select title="avatar" name="avatar" id="avatar">
              <option value="">Style</option>
              <option value="kinetic">🎨</option>
              <option value="default">✍🏻</option>
              <option value="visual">👀</option>
            </select>
          </section>
        </section>
        <section id="role-sect">
          <p className="section-heading">Role</p>
          <section className="radio-group">
            <p>
              <input title="lead" type="radio" value="Lead" name="lead" /> Lead
            </p>
            <p>
              <input title="dev" type="radio" value="Dev" name="dev" /> Developer
            </p>
            <p>
              <input title="watcher" type="radio" value="Watcher" name="watcher" /> Watcher
            </p>
          </section>
        </section>
        <section className="bottom">
          <button type="submit" className="secondary">
            Cancel
          </button>
          <button type="submit" className="primary">
            Create
          </button>
        </section>
      </form>
    </section>
  );
};
