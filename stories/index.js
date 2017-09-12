import React from 'react';

import { storiesOf } from '@storybook/react';
import Demo from '../dist/index'

storiesOf('Demo', module)
  .add('base', () => <Demo></Demo>);
