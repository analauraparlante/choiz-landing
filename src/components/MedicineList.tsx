import { useContext } from 'react';
import { MedicineContext } from '../context/MedicineContext';

const MedicineList = () => {
    const { medicineData } = useContext(MedicineContext);
    return (
        <section className='first-section-wrapper'>
            <div className='table-container'>
                <h2>Lista de medicamentos</h2>
                <h3>Pastillas</h3>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Marca que ofrecemos
                            </th>
                            <th>
                                Laboratorio
                            </th>
                            <th>
                                Precio <span>(sin cobertura médica)</span>
                            </th>
                        </tr>  
                    </thead>
                    <tbody>
                        {medicineData &&  (
                            medicineData.pills.map((pill: { brand: string; laboratory: string; price: number }) => (
                                <tr key={pill.brand}>
                                    <td className='brand-cell'>{pill.brand}</td>
                                    <td>{pill.laboratory}</td>
                                    <td>$ {pill.price}</td>
                                </tr>
                            ))  
                        )}
                    </tbody>                
                </table>

                <h3>Anillos</h3>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Marca que ofrecemos
                            </th>
                            <th>
                                Laboratorio
                            </th>
                            <th>
                                Precio <span>(sin cobertura médica)</span>
                            </th>
                        </tr>  
                    </thead>
                    <tbody>
                        {medicineData &&  (
                            medicineData.rings.map((ring: { brand: string; laboratory: string; price: number }) => (
                                <tr key={ring.brand}>
                                    <td className='brand-cell'>{ring.brand}</td>
                                    <td>{ring.laboratory}</td>
                                    <td>$ {ring.price}</td>
                                </tr>
                            ))  
                        )}
                    </tbody> 
                </table>
                    
                <h3>Parches</h3>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Marca que ofrecemos
                            </th>
                            <th>
                                Laboratorio
                            </th>
                            <th>
                                Precio <span>(sin cobertura médica)</span>
                            </th>
                        </tr>  
                    </thead>
                    <tbody>
                        {medicineData &&  (
                            medicineData.patches.map((patch: { brand: string; laboratory: string; price: number }) => (
                                <tr key={patch.brand}>
                                    <td className='brand-cell'>{patch.brand}</td>
                                    <td>{patch.laboratory}</td>
                                    <td>$ {patch.price}</td>
                                </tr>
                            ))  
                        )}
                    </tbody> 
                </table>
            </div>            
        </section>
    );
}

export default MedicineList;