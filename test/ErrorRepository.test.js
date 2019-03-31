import ErrorRepository from '../src/js/ErrorRepository';

test('search Error 400', () => {
  const errors = new ErrorRepository();
  const received = errors.getError(400);
  const expected = 'Bad Request';
  expect(received).toBe(expected);
});

test('search Unknown Error', () => {
  const errors = new ErrorRepository();
  const received = errors.getError('sdfd');
  const expected = 'Unknown error';
  expect(received).toBe(expected);
});
