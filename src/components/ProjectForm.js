import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

import { useForm } from '../util/hooks';
import { FETCH_PROJECTS_QUERY } from '../util/graphql';

function ProjectForm() {
  const { values, onChange, onSubmit } = useForm(createProjectCallback, {
    name: '', 
    difficulty: '',
    location: ''
  });

  /*const [createProject, { error }] = useMutation(CREATE_PROJECT_MUTATION, {
    variables: values, 
    update(_, result){
      console.log(result);
    }
  })*/

  const [createProject, { error }] = useMutation(CREATE_PROJECT_MUTATION, {
    variables: values,
    update(proxy, result) {
      const data = proxy.readQuery({
        query: FETCH_PROJECTS_QUERY
      });
      data.getProjects = [result.data.createProject, ...data.getProjects];
      proxy.writeQuery({ query: FETCH_PROJECTS_QUERY, data });
      values.name = '';
    }
  });

  function createProjectCallback() {
    createProject();
  }

  return (
    <Form onSubmit={onSubmit}>
      <h2>Create a Project:</h2>
      <Form.Field>
        <Form.Input
          placeholder="Project Name"
          name="name"
          onChange={onChange}
          value={values.name}
        />
        <Form.Input
          placeholder="Project Difficulty"
          name="difficulty"
          onChange={onChange}
          value={values.difficulty}
        />
        <Form.Input
          placeholder="Project Location"
          name="location"
          onChange={onChange}
          value={values.location}
        />
        <Button type="submit" color="teal">
          Submit
        </Button>
      </Form.Field>
    </Form>
  );
}

const CREATE_PROJECT_MUTATION = gql`
  mutation createProject($name: String!, $location: String!, $difficulty: String!) {
    createProject(name: $name, location: $location, difficulty: $difficulty) {
      id
      name
      difficulty
      location 
      createdAt
      username
    }
  }
`;

export default ProjectForm;