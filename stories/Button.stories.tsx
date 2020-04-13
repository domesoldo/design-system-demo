import React from 'react';
import { Button } from '../src';

export default {
  title: 'Buttons',
};

export const Primary = () => <Button title="PRESS ME" />;

export const Danger = () => <Button title="PRESS ME" color="danger" />;

export const Outline = () => <Button title="PRESS ME" variant="outline" />;
