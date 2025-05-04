"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { UserPlus, Save } from "lucide-react"


export default function MedicNote(){

    const [formData, setFormData] = useState({
        motivo:""
    });

    return(
        //Encabezado
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4 justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">Notas Médicas</h1>
                    <p className="text-gray-600 dark:text-gray-300">Gestión de Notas médicas para pacientes</p>
                </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="observations">Observaciones Adicionales</Label>
                <Textarea
                    id="Motivo"
                    placeholder="Motivo de consulta"
                    value={formData.motivo}
                    onChange={(e) => setFormData({ ...formData, motivo: e.target.value })}
                />
            </div>

            

        </div>
        
        
    )
}