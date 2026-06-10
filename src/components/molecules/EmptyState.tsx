import { Text } from "../atoms/Text";

interface EmptyStateProps {
  isSearching: boolean;
  query :string;
}


export default function EmptyState({ isSearching, query }: EmptyStateProps) {
    return (
        <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-20 h-20 rounded-full bg-surface-2 flex items-center justify-center mb-6">
                <svg className="w-10 h-10 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                </svg>
            </div>
            <Text variant="subheader" className=" text-primary text-xl mb-2">
                No Results
            </Text>
            <Text variant="caption" className="text-secondary text-base max-w-md">
                {isSearching
                    ? `We couldn't find any movies matching "${query}". Try a different search term.`
                    : "No movies available."}
            </Text>
        </div>
    );
}