import styles from './singleContent.module.scss';

function SingleContent() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1>Photo Gallery</h1>
        <p>Here are some photos of Caddo Lake and the surrounding area so you can get an idea of what it&apos;s going to be like. You get the best views of the lake while out on the guided boat tours so the views are spectacular.</p>
        <p>These photos are courtesy of some of the great photographers that have gone out and taken tours with us.</p>
        <p>Of course, like most things, it&apos;s even more beautiful in person. You don&apos;t have to take our word for it though, you can come and see for yourself. <a href={`/contact/`}>Contact us today!</a></p>
      </div>
    </section>
  );
}

export default SingleContent;
