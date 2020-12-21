import React,  { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Grid, Card, Image } from 'semantic-ui-react';
import { AuthContext } from '../context/auth'
import ProjectForm from '../components/ProjectForm';
import PostCard from '../components/PostCard';
import PriorHome from './priorHome'

function Home() {
  const { user } = useContext(AuthContext);
  const {
    loading,
    data
  } = useQuery(FETCH_PROJECTS_QUERY);
  

  const homePage = user ? (
    <div>
      <h1 className="page-title">Recent Projects</h1>
      <div className="postArea">
          <div>
            {user && (
              <ProjectForm />
            )}
          </div>
          <div >
            {loading ? (
              <h1>Loading projects...</h1>
            ) : (
              data.getProjects &&
              data.getProjects.map((project) => (
                <Grid.Column key={project.id} style={{ marginBottom: 20 }}>
                  <PostCard project={project} />
                </Grid.Column>
              ))
            )}
          </div>
          <div className="profileCard">
            <Card>
              <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
              <Card.Content>
                <Card.Header>{user.username}</Card.Header>
                <Card.Meta>
                  <span className='date'>Joined in 2015</span>
                </Card.Meta>
                <Card.Description>
                  Matthew is a musician living in Nashville.
                </Card.Description>
              </Card.Content>
            </Card>
          </div>
      </div>
    </div>
  ) : (
    <PriorHome />
  )
  return homePage
}

const FETCH_PROJECTS_QUERY = gql`
  {
    getProjects {
      id
      name
      location 
      difficulty
      createdAt
      username
    }
  }
`;

export default Home;