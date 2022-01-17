import { Component } from 'react';
import { SkeletonsComponent } from '../Components/SkeletonsComponent';
import { Layout } from '../Layouts/Layout';

export class Skeletons extends Component {
  render() {
    return (
      <Layout>
        <SkeletonsComponent />
      </Layout>
    );
  }
}
