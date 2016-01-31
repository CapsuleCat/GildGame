import React from 'react';

import {SceneActions} from '../stores/scene-store.jsx';
import {LostConnection} from '../components/status/lost-connection/lost-connection.jsx';

export default function () {
  SceneActions.transition(<LostConnection />);
}
