import React from 'react';
import { Table } from 'reactstrap';

export default class Dashboard extends React.Component {
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>Post Title</th>
            <th>Publish Date</th>
            <th>Views</th>
            <th>Completion %</th>
            <th>Conversions</th>
            <th>Revenue</th>
            <th>Tags</th>
          </tr>
        </thead>
        <tbody>
          {this.props.posts.map((post, i) => {
            <tr key={i}>
              <td>{post.title}</td>
              <td>{post.publishDate}</td>
              <td>{post.views}</td>
              <td>{post.completion}</td>
              <td>{post.conversions}</td>
              <td>{post.revenue}</td>
              <td>{post.tags}</td>
            </tr>
          })};
        </tbody>
      </Table>
    );
  }
}
