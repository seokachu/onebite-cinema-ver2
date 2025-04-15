import MoviePage from "@/app/movie/[id]/page";
import Modal from "@/components/Modal";
import type { PageProps } from "@/types";

export default function Page(props: PageProps) {
  return (
    <Modal>
      <MoviePage {...props} />
    </Modal>
  );
}
