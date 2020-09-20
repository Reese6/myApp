import React from 'react';

import { Form, InputGroup } from '~/globalComponents';

export default function F() {
  return (
    <Form>
      <InputGroup label="Имя проекта" name="name" value="description" hasError onChange />
    </Form>
  );
}
