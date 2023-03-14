import Error from 'next/error'

export default function Custom404() {
    return (
        <>
            <Error statusCode={404} title='Página en construcción' >
                <div>No found</div>
            </Error>
        </>

    );
}