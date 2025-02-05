import { useEffect, useState } from "react";
import { get, Superhero } from "../../models/superhero";
import CreationForm from "../creation-form/creation-form";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

export default function List() {
    const [superheroes, setSuperheroes] = useState<Superhero[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(true)

    useEffect(() => {
        loadSuperheroes();
    }, []);

    function loadSuperheroes() {
        setLoading(true);
        get().then(superheroes => {
            setError(false)
            setSuperheroes(superheroes)
        }).catch(() => setError(true))
            .finally(() => setLoading(false))
    }

    return (
        <div className="max-w-lg mx-auto p-6 space-y-6">
            <CreationForm onCreate={() => loadSuperheroes()} />
            <div className="space-y-4">
                {loading ? (
                    <Loader2 className="animate-spin" />
                ) :
                    error ? <p className="text-red-500 text-center">
                        There was an error fetching superheroes, try again.
                    </p> :
                        superheroes.length === 0 ? (
                            <p className="text-gray-500 text-center">
                                No superheroes added yet...
                            </p>
                        ) : (
                            superheroes.map((superhero) => (
                                <Card key={superhero.id}>
                                    <CardContent className="p-4">
                                        <p className="text-lg font-semibold">{superhero.name}</p>
                                        <p className="text-gray-600">Superpower: {superhero.power}</p>
                                        <p className="text-gray-600">
                                            Humility: {superhero.humility}/10
                                        </p>
                                    </CardContent>
                                </Card>
                            ))
                        )}
            </div>
        </div>
    );
}
