import {Navbar} from "@/components/UI/Navbar";
import { useRouter } from 'next/router';
import {PokeDetail} from "@/components/UI/PokeDetail";

export default function Detail()  {

    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <Navbar/>
            <main className="m-10">
            </main>
        </>
    )
}