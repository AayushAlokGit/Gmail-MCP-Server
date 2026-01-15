/**
 * Type definitions for Gmail MCP Server
 * Shared type definitions used across the server
 */

// Type definitions for Gmail API responses
export interface GmailMessagePart {
    partId?: string;
    mimeType?: string;
    filename?: string;
    headers?: Array<{
        name: string;
        value: string;
    }>;
    body?: {
        attachmentId?: string;
        size?: number;
        data?: string;
    };
    parts?: GmailMessagePart[];
}

export interface EmailAttachment {
    id: string;
    filename: string;
    mimeType: string;
    size: number;
}

export interface EmailContent {
    text: string;
    html: string;
}

export interface GmailMessageRequest {
    raw: string;
    threadId?: string;
}
