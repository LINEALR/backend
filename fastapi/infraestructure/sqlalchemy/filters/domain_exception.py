from fastapi import Request, HTTPException
from fastapi.responses import JSONResponse
from fastapi.responses import Response
from starlette.status import HTTP_404_NOT_FOUND, HTTP_500_INTERNAL_SERVER_ERROR
from datetime import datetime

async def domain_exception_handler(request: Request, exc: Exception) -> Response:
    status_code = HTTP_500_INTERNAL_SERVER_ERROR
    if isinstance(exc, HTTPException):
        status_code = HTTP_404_NOT_FOUND
        
    return JSONResponse(
        status_code = status_code,
        content={
            "error": exc.__class__.__name__,
            "message": getattr(exc, "message", str(exc)),
            "statuscode": status_code,
            "timestamp": datetime.utcnow().isoformat(),
        },
    )