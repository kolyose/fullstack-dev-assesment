const head = ctx => {
  ctx.status = 200;
};

const get = ctx => {
  ctx.redirect('/campaigns');
}

export default {
  head,
  get
}