import { FileText } from "lucide-react";

export default function SummaryCard({ summary }) {

    return (

        <div className="summary-card">

            <div className="summary-header">

                <FileText size={22} />

                <h3>AI Document Summary</h3>

            </div>

            {summary ? (

                <p>{summary}</p>

            ) : (

                <div>

                    <p>
                        Upload a document to generate an AI summary.
                    </p>

                    <ul>
                        <li>• Summarize this document</li>
                        <li>• Important dates</li>
                        <li>• Key people</li>
                        <li>• Risks & obligations</li>
                    </ul>

                </div>

            )}

        </div>

    );

}