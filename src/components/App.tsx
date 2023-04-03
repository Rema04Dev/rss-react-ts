import React from 'react';

const App = () => {
  return (
    <main>
      <section className="form-container">
        <div className="col-md-10 col-lg-8 mx-auto text-white">
          <h1 className="display-3 mb-0">RSS агрегатор</h1>
          <p className="lead">
            Начните читать RSS сегодня! Это легко, это красиво.
          </p>
          <form action="" className="rss-form text-body">
            <div className="row">
              <div className="col">
                <div className="form-floating">
                  <input
                    id="url-input"
                    name="url"
                    aria-label="url"
                    className="form-control w-100"
                    placeholder="ссылка RSS"
                  />
                  <label htmlFor="url-input">Ссылка RSS</label>
                </div>
              </div>
              <div className="col-auto">
                <button
                  type="submit"
                  aria-label="add"
                  className="h-100 btn btn-lg btn-primary px-sm-5"
                >
                  Добавить
                </button>
              </div>
            </div>
          </form>
          <p className="mt-2 mb-0 text-muted">
            Пример: https://ru.hexlet.io/lessons.rss
          </p>
          <p className="feedback m-0 position-absolute small text-danger"></p>
        </div>
      </section>
    </main>
  );
};

export default App;
