import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import ComplexUI from '../ComplexUI.js';
import UsersList from '../UsersList.js';

storiesOf('UI components', module)
  .add('to ComplexUI', () => <ComplexUI/>)
  .add('with some emoji', () => <ComplexUI text={'Hello there!😎 '}/>);

storiesOf('Data', module)
  .add('UsersList', () => <UsersList/>);

// import { Button, Welcome } from '@storybook/react/demo';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
