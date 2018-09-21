package  com.sap.cloudsamples.spaceflight.handlers.bookingservice; 

//import com.sap.cloud.sdk.service.prov.api.*;
//import com.sap.cloud.sdk.service.prov.api.annotations.*;
//import com.sap.cloud.sdk.service.prov.api.exits.*;
//import com.sap.cloud.sdk.service.prov.api.request.*;
//import com.sap.cloud.sdk.service.prov.api.response.*;
//
//import java.util.List;

/***
 * Handler class for persisted entity "Itineraries" of service "BookingService".
 * This handler registers custom handlers for before / after operation hooks.
 * For more information, see: https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/94c7b69cc4584a1a9dfd9cb2da295d5e.html
 */
public class ItinerariesHooksHandler {

//	@BeforeRead(entity = "Itineraries", serviceName = "BookingService")
//	public BeforeReadResponse beforeReadItineraries(ReadRequest req, ExtensionHelper helper) {
//		//TODO: add your custom logic / validations here...
//
//		return BeforeReadResponse.setSuccess().response(); //use this API if validation checks are successful.
//		//return BeforeReadResponse.setError(ErrorResponse.getBuilder().setMessage("You are not authorized to read this item").response()); //use this API if your validation checks fail
//	}

//	@AfterRead(entity = "Itineraries", serviceName = "BookingService")
//	public ReadResponse afterReadItineraries(ReadRequest req, ReadResponseAccessor res, ExtensionHelper helper) {
//		EntityData data = res.getEntityData();
//		//TODO: add your custom logic / validations here...
//
//		return res.getOriginalResponse(); //use this API if no change is required and the original response can be returned as output.
//		//return ReadResponse.setSuccess().setData(data).response(); //use this API if the payload is modified.
//		//return ReadResponse.setError(ErrorResponse.getBuilder().setMessage("Read Operation Failed").response()); //use this API if should return error response.
//	}

//	@BeforeQuery(entity = "Itineraries", serviceName = "BookingService")
//	public BeforeQueryResponse beforeQueryItineraries(QueryRequest req, ExtensionHelper helper) {
//		//TODO: add your custom logic / validations here...
//
//		return BeforeQueryResponse.setSuccess().response(); //use this API if validation checks are successful.
//		//return BeforeQueryResponse.setError(ErrorResponse.getBuilder().setMessage("You are not authorized to query this entity").response()); //use this API if any validation checks fail.
//	}

//	@AfterQuery(entity = "Itineraries", serviceName = "BookingService")
//	public QueryResponse afterQueryItineraries(QueryRequest req, QueryResponseAccessor res, ExtensionHelper helper) {
//		List<EntityData> dataList = res.getEntityDataList(); //original list
//		//TODO: add your custom logic / validations here...
//
//		return res.getOriginalResponse(); //use this API if no change is required and the original response can be returned as output.
//		//return QueryResponse.setSuccess().setData(dataList).response(); //use this API if the payload is modified.
//		//return QueryResponse.setError(ErrorResponse.getBuilder().setMessage("Query Operation Failed").response()); //use this API if should return error response.
//	}

//	@BeforeCreate(entity = "Itineraries", serviceName = "BookingService")
//	public BeforeCreateResponse beforeCreateItineraries(CreateRequest req, ExtensionHelper helper) {
//		EntityData data = req.getData();
//		//TODO: add your custom logic / validations here...
//
//		return BeforeCreateResponse.setSuccess().response(); //use this API if the payload has not been modified.
//		//return BeforeCreateResponse.setSuccess().setEntityData(data).response(); //use this API if the payload is modified.
//		//return BeforeCreateResponse.setError(ErrorResponse.getBuilder().setMessage("You are not authorized to add items.").response()); //use this API if any validation checks fail.
//	}

//	@AfterCreate(entity = "Itineraries", serviceName = "BookingService")
//	public CreateResponse afterCreateItineraries(CreateRequest req, CreateResponseAccessor res, ExtensionHelper helper) {
//		//TODO: add your custom logic / validations here...
//
//		return res.getOriginalResponse(); //use this API if operation succeeded and payload has not been modified.
//		//return CreateResponse.setError(ErrorResponse.getBuilder().setMessage("Create Operation Failed").response()); //use this API if should return error response.
//	}

//	@BeforeUpdate(entity = "Itineraries", serviceName = "BookingService")
//	public BeforeUpdateResponse beforeUpdateItineraries(UpdateRequest req, ExtensionHelper helper) {
//		EntityData data = req.getData();
//		//TODO: add your custom logic / validations here...
//
//		return BeforeUpdateResponse.setSuccess().response(); //use this API if the payload has not been modified.
//		//return BeforeUpdateResponse.setSuccess().setEntityData(data).response(); //use this API if the payload is modified.
//		//return BeforeUpdateResponse.setError(ErrorResponse.getBuilder().setMessage("You are not authorized to update this item.").response()); //use this API if any validation checks fail.
//	}

//	@AfterUpdate(entity = "Itineraries", serviceName = "BookingService")
//	public UpdateResponse afterUpdateItineraries(UpdateRequest req, UpdateResponseAccessor res, ExtensionHelper helper) {
//		//TODO: add your custom logic / validations here...
//
//		return res.getOriginalResponse(); //use this API if operation succeeded and payload has not been modified.
//		//return UpdateResponse.setError(ErrorResponse.getBuilder().setMessage("Update Operation Failed").response()); //use this API if should return error response.
//	}

//	@BeforeDelete(entity = "Itineraries", serviceName = "BookingService")
//	public BeforeDeleteResponse beforeDeleteItineraries(DeleteRequest req, ExtensionHelper helper) {
//		//TODO: add your custom logic / validations here...
//
//		return BeforeDeleteResponse.setSuccess().response(); //use this API if validation checks are successful.
//		//return BeforeDeleteResponse.setError(ErrorResponse.getBuilder().setMessage("You are not authorized to delete this item.").response()); //use this API if your validation checks fail
//	}

//	@AfterDelete(entity = "Itineraries", serviceName = "BookingService")
//	public DeleteResponse afterDeleteItineraries(DeleteRequest req, DeleteResponseAccessor res, ExtensionHelper helper) {
//		//TODO: add your custom logic / validations here...
//
//		return res.getOriginalResponse(); //use this API if operation succeeded and payload has not been modified.
//		//return DeleteResponse.setError(ErrorResponse.getBuilder().setMessage("Delete Operation Failed").response()); //use this API if should return error response.
//	}

}