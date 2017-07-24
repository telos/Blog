import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
      </div>
    );
  }

  render() {
    return (
      <form>
        <Field
          label="Title Test"
          name="title"
          component={this.renderField}
        />
        <Field
          label = "Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label = "Post Content"
          name="content"
          component={this.renderField}
        />
      </form>
    );
  }
}

function validate(values) {
  // Return the redux-form validation object
  const errors = {};

  // Validate the inputs from values
  if (!values.title || values.title.length < 3) {
    errors.title = "Enter a title that is at least 3 characters!";
  }
  if (!values.categories) {
    errors.categories = "Enter some categories!";
  }
  if (!values.content) {
    errors.content = "Enter some content!";
  }

  // If errors is empty, then redux-form treats the form as fine to submit
  // If errors has *any* properties, redux-form assumes the form is invalid
  return errors;
}

export default reduxForm({
  validate: validate,
  form: 'PostsNewForm'
})(PostsNew);
